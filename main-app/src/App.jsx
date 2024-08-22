import React from 'react';

const Header = React.lazy(() => import('headerApp/Header'));
const Content = React.lazy(() => import('contentApp/Content'));
 
console.log(Header)
function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Content...</div>}>
        <Content />
      </React.Suspense>
    </>
  );
}

export default App;