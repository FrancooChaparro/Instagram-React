import React from 'react';
import styles from "../stylesheets/MenuLateral.module.css";
import  Franco  from "../images/Franco.jpg"

export const MenuLateral = () => {
        const userActive = JSON.parse(localStorage.getItem("USUARIO")) || []
    return (
        <div className={styles.ContainerMenu}>
            <div className={styles.Profile}>
                <div className={styles.ContainerImgProfile}>
                    <img src={userActive.image ? userActive.image : Franco} alt="" />
                </div>
                <div className={styles.ContainerNombreProfile}>
                    <div>
                        <h4>{userActive.name ? userActive.name : "Franco"}</h4>
                        <h5>{userActive.name ? userActive.username : "Franco Chaparro"}</h5>
                    </div>
                </div>
            </div>



            <div className={styles.SugerentionsTitle}>
                    <h4>Suggestions For You</h4>
                    <h5>See All</h5>
            </div>

            <div className={styles.SugerentionsImg}>
                    <div className={styles.FriendsImg}>
                        <img src="https://image.shutterstock.com/image-vector/picture-flat-icon-long-shadow-260nw-281092040.jpg" alt="" />
                    </div>
                    <div className={styles.FriendsName}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                 <span className={styles.follName}>Aumbrosos</span>
                                 <span className={styles.foll}>Follows you</span>
                            </div>
                    </div>
                    <div className={styles.FriendsFollow}>
                            <span>Follow</span>
                    </div>
            </div>
            <div className={styles.SugerentionsImg}>
                    <div className={styles.FriendsImg}>
                        <img src="https://static-cse.canva.com/blob/951775/2550logotiposqueteinspiraran.jpg" alt="" />
                    </div>
                    <div className={styles.FriendsName}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                 <span className={styles.follName}>Amazon</span>
                                 <span className={styles.foll}>Follows you</span>
                            </div>
                    </div>
                    <div className={styles.FriendsFollow}>
                            <span>Follow</span>
                    </div>
            </div>
            <div className={styles.SugerentionsImg}>
                    <div className={styles.FriendsImg}>
                        <img src="https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Shell.jpg" alt="" />
                    </div>
                    <div className={styles.FriendsName}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                 <span className={styles.follName}>Shell</span>
                                 <span className={styles.foll}>Follows you</span>
                            </div>
                    </div>
                    <div className={styles.FriendsFollow}>
                            <span>Follow</span>
                    </div>
            </div>
            <div className={styles.SugerentionsImg}>
                    <div className={styles.FriendsImg}>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/coca-cola-1863554-1579762.png" alt="" />
                    </div>
                    <div className={styles.FriendsName}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                 <span className={styles.follName}>Coca Cola</span>
                                 <span className={styles.foll}>Follows you</span>
                            </div>
                    </div>
                    <div className={styles.FriendsFollow}>
                            <span>Follow</span>
                    </div>
            </div>
            <div className={styles.SugerentionsImg}>
                    <div className={styles.FriendsImg}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/2048px-Volkswagen_Logo_till_1995.svg.png" alt="" />
                    </div>
                    <div className={styles.FriendsName}>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                 <span className={styles.follName}>Wolsvagen</span>
                                 <span className={styles.foll}>Follows you</span>
                            </div>
                    </div>
                    <div className={styles.FriendsFollow}>
                            <span>Follow</span>
                    </div>
            </div>



            <div className={styles.Footer}>
                <div className={styles.FooterData}>
                    <span>About-Help-Press-API-Jobs-Privacy-Terms-Locations-Top Accounts-Hashtags-lenguage</span>
                </div>
                <div className={styles.FooterCopy}>
                    <span>© 2023 INSTAGRAM FROM FACEBOOK</span>
                </div>
            </div>
        </div>
    )
}
