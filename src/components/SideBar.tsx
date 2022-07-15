// import React from 'react'

// export default function SideBar() {
//   return (
//     <div>SideBar</div>
//   )
// }



import React from 'react';

function Link({ children }) {
  return (
    <a className="text-grey-darker font-bold hover:bg:blue-lightest hover:text-blue px-5 py-3 block">
      <span>{children}</span>
    </a>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-1/5 border-r border-grey-light">
      <div className="p-5 pb-8 font-bold text-blue-dark">Users</div>
      <nav>
        <ul className="list-reset">
          <li>
            <Link>Mensaje 1</Link>
          </li>
          <li>
            <Link>Mensaje 2</Link>
          </li>
          <li>
            <Link>Mensaje 3</Link>
          </li>
          <li>
            <Link>Mensaje 4</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}





  
