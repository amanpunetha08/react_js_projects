import React from "react";

import Card from "./Card";

const CardSection =() =>(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title = "My Art" buttonText = "DSAwithAman"card_link = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <Card title= "My Task" buttonText="Completed" card_link= "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <Card card_link="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
      </div>
    </section>
);

export default CardSection;