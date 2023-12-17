/* eslint react/prop-types: 0 */

function Layout({children}){
    return (
    <div className="flex flex-col items-center mt-20">
        {children}
    </div>
    )
}

export default Layout; 