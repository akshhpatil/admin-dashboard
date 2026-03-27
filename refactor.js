const fs = require('fs');
const path = require('path');

const srcApp = path.join(__dirname, 'src', 'app');

const moves = [
  // Directories
  { from: 'pages', to: 'features' },
  { from: 'shared/components', to: 'shared/ui' },
  { from: 'core/models', to: 'core/types' },
  // Files
  { from: 'core/auth/auth-guard.ts', to: 'core/guards/auth.guard.ts' },
  { from: 'core/auth/auth-guard.spec.ts', to: 'core/guards/auth.guard.spec.ts' },
  { from: 'core/auth/role-guard.ts', to: 'core/guards/role.guard.ts' },
  { from: 'core/auth/role-guard.spec.ts', to: 'core/guards/role.guard.spec.ts' },
  { from: 'core/auth/auth.ts', to: 'core/services/auth.service.ts' },
  { from: 'core/auth/auth.spec.ts', to: 'core/services/auth.service.spec.ts' },
  { from: 'core/services/user.ts', to: 'core/api/user.api.ts' },
  { from: 'core/services/loader.ts', to: 'core/services/loader.service.ts' },
  { from: 'core/services/theme.ts', to: 'core/services/theme.service.ts' },
  { from: 'core/services/toast.ts', to: 'core/services/toast.service.ts' },
  { from: 'core/interceptors/token-interceptor.ts', to: 'core/interceptors/token.interceptor.ts' },
  { from: 'core/interceptors/token-interceptor.spec.ts', to: 'core/interceptors/token.interceptor.spec.ts' },
];

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const fileMovesMap = new Map();

for (const m of moves) {
  const isFile = m.from.endsWith('.ts');
  const oldAbs = path.join(srcApp, isFile ? m.from : m.from + '/');
  const newAbs = path.join(srcApp, isFile ? m.to : m.to + '/');
  fileMovesMap.set(oldAbs.replace(/\\/g, '/'), newAbs.replace(/\\/g, '/'));
}

function getNewPath(oldPath) {
  const normOld = oldPath.replace(/\\/g, '/');
  for (const [o, n] of fileMovesMap.entries()) {
    if (o.endsWith('.ts') && normOld === o) {
      return n;
    } else if (!o.endsWith('.ts') && normOld.startsWith(o)) {
      return normOld.replace(o, n);
    }
  }
  return normOld;
}

const allFiles = getAllFiles(srcApp);
const fileContents = new Map();

function normalizeImportPath(baseFile, importPath) {
  if (!importPath.startsWith('.')) return null; 
  const resolved = path.resolve(path.dirname(baseFile), importPath).replace(/\\/g, '/');
  
  let matchedOldFile = null;
  // Also match css/html resources natively
  for (const f of allFiles) {
    const normF = f.replace(/\\/g, '/');
    if (normF === resolved || normF === resolved + '.ts' || normF === resolved + '/index.ts') {
        matchedOldFile = normF;
        break;
    }
  }
  return matchedOldFile;
}

for (const f of allFiles) {
  const oldPathNorm = f.replace(/\\/g, '/');
  const newPathNorm = getNewPath(oldPathNorm);
  
  if (f.endsWith('.ts') || f.endsWith('.html') || f.endsWith('.scss') || f.endsWith('.css')) {
    let content = fs.readFileSync(f, 'utf8');

    // Regex to match imports and loadComponent
    content = content.replace(/(from\s+['"]|import\(['"])([^'"]+)(['"])/g, (match, p1, p2, p3) => {
      const matchOldFile = normalizeImportPath(f, p2);
      if (matchOldFile) {
         const matchNewFile = getNewPath(matchOldFile);
         const newDirNode = path.dirname(newPathNorm);
         let newRelPath = path.relative(newDirNode, matchNewFile).replace(/\\/g, '/');
         
         if (newRelPath.endsWith('.ts')) newRelPath = newRelPath.slice(0, -3); 
         if (!newRelPath.startsWith('.')) newRelPath = './' + newRelPath;
         return p1 + newRelPath + p3;
      }
      return match;
    });
    
    // Check for string values referencing styles/templates like './layout.component.html'
    // Actually template URLs are fine since they move together EXCEPT if they are absolute, but they are relative usually.
    
    fileContents.set({ old: f, new: newPathNorm }, content);
  } else {
    fileContents.set({ old: f, new: newPathNorm }, fs.readFileSync(f));
  }
}

const newAppDir = path.join(__dirname, 'src', 'app_new');
if (fs.existsSync(newAppDir)) fs.rmSync(newAppDir, { recursive: true, force: true });

for (const [paths, content] of fileContents.entries()) {
    const targetFile = paths.new.replace(srcApp.replace(/\\/g, '/'), newAppDir.replace(/\\/g, '/'));
    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, content);
}

console.log("Transformation to app_new completed successfully. You can now rename src/app_new to src/app.");
