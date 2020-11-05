import React from 'react'
function signout() {
    localStorage.clear();
    window.location.href = "/sign-in";
    return (
        <div>

        </div>
    )
}

export default signout
