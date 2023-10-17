
function Navbar() {

    return (
        <nav>
            
            <div>
            <img src="./picture/logo.jpg" alt="logo" className="logo"/>;
               
                <ul>

                    <li> Trouver un magasin</li>
                    <li> Aide</li>
                    <li> Nous rejoindre</li>
                    <li> S'identifier</li>
                    <li> Panier</li>

                </ul>
            </div>
            <div className="catégorie">
            
                <ul>

                    <li> Nouveauté</li>
                    <li> Homme</li>
                    <li> Femme</li>
                    <li> Enfant</li>

                </ul>

                

            </div>

        </nav>


    );
}
export default Navbar