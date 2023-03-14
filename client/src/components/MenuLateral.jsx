import React from 'react';
import styles from "../stylesheets/MenuLateral.module.css";

export const MenuLateral = () => {
    return (
        <div className={styles.ContainerMenu}>
            <div className={styles.Profile}>
                <div className={styles.ContainerImgProfile}>
                    <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e547d3b8ed07fe40d314336cee361323~c5_720x720.jpeg?x-expires=1678651200&x-signature=pUx5ZAy1py6oaZBdKS9XO8YZj0Q%3D" alt="" />
                </div>
                <div className={styles.ContainerNombreProfile}>
                    <div>
                        <h4>Franco</h4>
                        <h5>Franco Chaparro</h5>
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
