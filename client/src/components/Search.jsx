import React from 'react';
import styles from "../stylesheets/Search.module.css";
import { Link } from 'react-router-dom';

export const Search = () => {
  return (
    <div className={styles.SearchResponsive}>
        <div  className={styles.SearchResponsiveTop}>
            <input type="text" placeholder='Search'/>
        </div>
        <div  className={styles.SearchResponsiveBot}>
            <div  className={styles.Container}>
                    <div><Link to="/SearchPhoto"><img src="https://www.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg" alt="" /></Link></div>
                    <div><img src="https://concepto.de/wp-content/uploads/2019/02/paisaje-natural-item-5.jpg" alt="" /></div>
                    <div><img src="https://www.queenonline.com/global/uploads/MOJOQueenpart2.jpg" alt="" /></div>
            </div>
            <div className={styles.Container}>
                    <div><img src="https://media.istockphoto.com/id/944812540/es/foto/paisaje-de-monta%C3%B1a-isla-de-ponta-delgada-azores.jpg?s=612x612&w=0&k=20&c=8dzEQsFtGhIGr-FXmRpjvH565bvqhojshgHrdGzoX4Q=" alt="" /></div>
                    <div><img src="https://images4.alphacoders.com/975/97548.jpg" alt="" /></div>
                    <div><img src="https://1.bp.blogspot.com/-RGrQpjj48Mo/WsuJH-wZUAI/AAAAAAAAJzE/1q3DkJDCoQsawd9VXnwOZ81Je6lQE0aEgCLcBGAs/s1600/imagenes-de-paisajes-para-dibujar-bonitos.jpg" alt="" /></div>
            </div>
            <div className={styles.Container}>
                     <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" alt="" /></div>
                    <div><img src="https://canaltenis.com/wp-content/uploads/2023/03/BALTC-e1678932747788-559x372.jpg" alt="" /></div>
                    <div><img src="https://www.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg" alt="" /></div>
            </div>
            <div className={styles.Container}>
                     <div><img src="https://media.vogue.mx/photos/5e584d9ff9b1a500085659c7/master/w_3000,c_limit/tendencias-zapatos-bajos-tenis-alexander-mcqueen.jpg" alt="" /></div>
                    <div><img src="https://img.a.transfermarkt.technology/portrait/big/342229-1632686046.jpg?lm=1" alt="" /></div>
                    <div><img src="https://www.atptour.com/-/media/images/news/2023/03/15/23/07/medvedev-indian-wells-2023-qf-holder.jpg" alt="" /></div>
            </div>
            <div className={styles.Container}>
                     <div><img src="https://www.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg" alt="" /></div>
                    <div><img src="https://www.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg" alt="" /></div>
                    <div><img src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" alt="" /></div>
            </div>
        </div>
    </div>
  )
}
