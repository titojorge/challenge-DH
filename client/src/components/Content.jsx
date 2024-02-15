import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Presale from './Presale'
import Applicants from './Applicants'
import Professions from './Professions'

function Content(){

    return (

		<main className="content-wrap">
            <Presale />
            <Applicants />
            <Professions />
		</main>
        
    )

}

export default Content;