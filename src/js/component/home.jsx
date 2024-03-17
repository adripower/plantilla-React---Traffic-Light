import React,{useState} from "react";  // se importa el hook useState

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
//funcionalidades
const[luz,setLuz]=useState("verde");

// faltan los bonus desde que pueda lo hago.

	return (
		<div className="text-center">
			<div  className=" semaforo ">
				<div
          		className={`rojo ${luz === "rojo" ? "rojoF" : ""}`}
				onClick={() => setLuz("rojo")}>
				</div>
				<div className={`naranja ${luz === "naranja" ? "naranjaF" : ""}`}
        		onClick={() => setLuz("naranja")}>
				</div>
				<div className={`verde ${luz === "verde" ? "verdeF" : ""}`}
        		onClick={() => setLuz("verde")}>
		 		</div>
						</div>
			
		</div>
	);
};

export default Home;
