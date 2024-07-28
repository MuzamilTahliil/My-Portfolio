import React from "react";
import '../global.css'


function About  ()  {
    return(
        <div id="Bio" className="profile-card">
        <div className="profile-image-container">
          <img src="Muzamil.jpg" alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <h2>About Me</h2>
          <h3>Frontend Developer!</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores, itaque architecto voluptatum ut obcaecati vero sapiente reiciendis et exercitationem autem perspiciatis, impedit, blanditiis velit ullam fuga accusamus. Explicabo, recusandae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, pariatur minus at ut totam perspiciatis, molestiae adipisci unde voluptatem velit voluptatibus ipsam autem, impedit explicabo aliquid. Deleniti, suscipit. Ab, non.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure id esse doloremque explicabo neque suscipit rerum. Doloremque, fuga modi aut dolorem omnis earum blanditiis, ex ipsum praesentium ea alias iure!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus officiis, cupiditate doloremque magnam libero aliquid. Accusantium pariatur voluptatem, sit, nesciunt praesentium doloribus magnam modi molestias autem reiciendis amet animi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus, quia officia consequatur deleniti et similique officiis! Perferendis officia, sunt eos reiciendis corrupti esse provident, obcaecati aliquam vel in deleniti.
          </p>
          <button>Read More</button>
        </div>
      </div>
  
    )
}

export default About;