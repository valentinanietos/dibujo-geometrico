function setup() {
    cv = createCanvas(400, 400);
    background(250, 248, 237);
  }
  
function draw() {
    //CARA C3PO
    //Antena base contorno cara 
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(3);
    ellipse(100, 45, 15, 25);

    //Base contorno cara 
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(3);
    ellipse(100, 95, 90, 105);

    //Contorno cara 
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(2.5);
    ellipse(100, 100, 80, 95); 

    //Ojos 
    fill(244, 233, 28);
    stroke(28, 27, 23);
    strokeWeight(1);
    ellipse(87, 85, 20, 20);//derecho
    ellipse(112, 85, 20, 20);//izquierdo

    //Contorno ojos 
    //amarillo
    noFill(); 
    stroke(156, 130, 17);
    strokeWeight(1.5);
    ellipse(87, 85, 23, 23);
    ellipse(112, 85, 23, 23);

    //negro
    noFill();
    stroke(0, 0, 0);
    strokeWeight(1.2);
    ellipse(87, 85, 25, 25);
    ellipse(112, 85, 25, 25);

    //Rayas ojos 
    //ojo derecho
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(1);
    line(80, 91, 80, 78); //1
    line(84, 93, 84, 76); //2
    line(88, 95, 88, 75); //3
    line(92, 93, 92, 77); //4

    //ojo izquierdo
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(1);
    line(105, 91, 105, 78); //1
    line(109, 93, 109, 76); //2
    line(113, 95, 113, 75); //3
    line(117, 93, 117, 77); //4

    //Circulo ojo 
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(6);
    point(87, 85); //derecho
    point(112, 85); //izquierdo

    //Orejas 
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(3);
    rect(50, 86, 10, 30); //derecha
    rect(140, 86, 10, 30); //izquierda


    //CUERPO C3PO
    //cuello
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(2.5);
    rect(80, 150, 40, 5); //1
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(1.5);
    rect(80, 155, 40, 5); //2
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(2.5);
    rect(80, 160, 40, 5); //3

    

    //calzones rect
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(2.5);
    rect(63, 242, 75, 40);

    //calzones circulo
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(1);
    ellipse(100, 250, 50, 30);

    //circulo cinturon
    fill(0, 0, 0);
    noStroke();
    ellipse(100, 235, 70, 50);
    //cinturon
    fill(0, 0, 0);
    noStroke();
    rect(65, 230, 70, 15);

    //pecho bajo
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(2.5);
    ellipse(100, 210, 87, 60);

    //pecho alto
    fill(1223, 191, 36);
    stroke(28, 27, 23);
    strokeWeight(2.5);
    rect(55, 166, 90, 50);

    //circulo en la mitad
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(1.5);
    ellipse(100, 220, 40, 40); //1
    fill(156, 130, 17);
    stroke(0);
    strokeWeight(1);
    ellipse(100, 220, 30, 30); //2
    ellipse(100, 220, 25, 25); //3
    fill(156, 130, 17);
    stroke(0);
    strokeWeight(1.5);
    ellipse(100, 220, 20, 20);

    //piernas
    //izquierda
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(2.5);
    rect(63, 280, 32, 100);
    //derecha
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(2.5);
    rect(106, 280, 32, 100);

    //rodillas
    fill(1223, 191, 36); 
    stroke(0);
    strokeWeight(1);
    ellipse(79, 340, 30, 60); //derecha
    ellipse(122, 340, 30, 60); //izquierda

    //zapato
    fill(1223, 191, 36);
    stroke(0);
    strokeWeight(1.5);
    rect(60, 375, 38, 23); //izq
    rect(103, 375, 38, 23);//der

    //boca rayas
    fill(0, 0, 0);
    stroke(0);
    strokeWeight(1);
    rect(90, 115, 20, 3);

    //rayas piernas
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    line(122, 375, 122, 280); //izq
    line(78, 375, 78, 280); //der
   






    


    
   //R2D2
   //cabeza
   fill(192, 189, 180);
   stroke(0);
   strokeWeight(2.5);
   ellipse(310, 230, 120, 120);

   //cuerpo
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(2.5);
   rect(250, 235, 120, 110);
   //rect debajo del cuerpo
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(2.5);
   rect(265, 345, 90, 10);

   //rayas entre la cabeza y el cuerpo
   fill(19, 120, 241); //azul1
   stroke(19, 120, 241);
   strokeWeight(3);
   line(370, 238, 250, 238); 
   fill(255, 255, 255); //blanca
   stroke(255, 255, 255);
   strokeWeight(2);
   line(370, 240, 250, 240); 
   fill(19, 120, 241); //azul1
   stroke(19, 120, 241);
   strokeWeight(3);
   line(370, 242, 250, 242); 

   //piernas altas
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(2.5);
   rect(371, 240, 15, 40); //derecha
   rect(234, 240, 15, 40); //izquierda

   //piernas bajas
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(2.5);
   rect(374, 280, 10, 66); //derecha
   rect(236, 280, 10, 66); //izquierda

   //pies
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(2.5);
   rect(229, 346, 25, 10); //izquierdo
   rect(366, 346, 25, 10); 

   //raya azul a ambos lados
   fill(19, 120, 241); 
   stroke(19, 120, 241);
   strokeWeight(3);
   line(232, 280, 232, 240); //izquierda
   line(388, 280, 388, 240); //derecha

   //rayas verticales debajo del cuerpo 
   fill(0, 0, 0);
   stroke(0, 0, 0);
   strokeWeight(3);
   line(280, 355, 280, 345); //1
   line(310, 355, 310, 345); //2
   line(340, 355, 340, 345); //3

   //rayas piernas
   fill(0, 0, 0);
   stroke(0, 0, 0);
   strokeWeight(1);
   line(241, 347, 241, 280); //izquierda
   line(379, 347, 379, 280); //derecha

   //rayas brazos
   fill(0, 0, 0);
   stroke(0, 0, 0);
   strokeWeight(1);
   line(377, 280, 377, 240); //izquierda1
   line(381, 280, 381, 240); //izquierda2
   line(240, 280, 240, 240); //derecha1
   line(244, 280, 244, 240); //derecha2

   //raya horizontal de los pies
   fill(0, 0, 0); 
   stroke(0, 0, 0);
   strokeWeight(1);
   line(253, 351, 229, 351); //izquierda
   line(390, 351, 368, 351); //derecha

   //por dentro cabeza
   fill(19, 120, 241); 
   stroke(0);
   strokeWeight(3);
   rect(261, 203, 12, 25); //izquierda
   rect(278, 203, 12, 25); //derecha
   rect(351, 203, 8, 25); //la de la esquina derecha
   rect(296, 206, 27, 20); //rect azul del medio
   rect(295, 176, 30, 25); //rect azul de arriba
   fill(255, 255, 255); 
   stroke(0);
   strokeWeight(1.5);
   rect(256, 250, 17, 87); //rect blanca izquierda1
   stroke(0);
   strokeWeight(1);
   rect(259.5, 254, 10, 80); //rect blanca izquierda1 por dentro
   stroke(0);
   strokeWeight(1.5);
   rect(276, 300, 12, 37); //rect blanca izquierda2

   //rect encima caja rect blanca mitad abajo
   stroke(0);
   strokeWeight(1.5)
   rect(296, 276, 30, 30);
   stroke(0);
   strokeWeight(1.5);
   rect(292, 297, 40, 40); //caja rect blanca mitad abajo 
   stroke(0);
   strokeWeight(1);
   rect(336, 305, 13, 32); //rect blanca derecha1
   stroke(0);
   strokeWeight(1.5);
   rect(352, 250, 14, 87); //rect blanca derecha2
   stroke(0);
   strokeWeight(1.5);
   rect(330, 277, 18, 18); //rect al lado rect encima caja rect blanca mitad abajo

   //rayas azules cuerpo
   fill(19, 120, 241); 
   stroke(0);
   strokeWeight(1.5);
   rect(276.5, 250, 70, 4.5);//1
   rect(276.5, 258, 70, 4.5);//2
   rect(276.5, 266, 70, 4.5);//3
   //raya gris horizontal en la mitad de las rayas azules cuerpo
   fill(192, 189, 180); 
   stroke(192, 189, 180);
   strokeWeight(1);
   line(276.5, 252.2, 348, 252.5);//1
   line(276.5, 260.2, 348, 260.5);//2
   line(276.5, 268.2, 348, 268.5);//3

   //circulos cabeza
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(1);
   ellipse(310, 188, 18, 18);//arriba
   //adentro arriba
   fill(109, 103, 103);
   stroke(0);
   strokeWeight(1);
   ellipse(310, 188, 14, 14);
   fill(255, 0, 0);
   stroke(0);
   strokeWeight(2);
   ellipse(309.5, 216, 13, 13);//centro
   fill(192, 189, 180);
   stroke(0);
   strokeWeight(1.5);
   ellipse(337, 216, 20, 20);//centro derecha
   //adentro centro
   fill(109, 103, 103);
   stroke(0);
   strokeWeight(2);
   ellipse(337, 216, 15, 15);
   fill(109, 103, 103);
   stroke(0);
   strokeWeight(0.5);
   ellipse(337, 216, 13, 13);
   ellipse(337, 216, 11, 11);

   //circulo cuerpo
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(1);
   ellipse(312, 317, 30, 30)
   //adentro circulo cuerpo1
   fill(109, 103, 103);
   stroke(0);
   strokeWeight(1);
   ellipse(312, 317, 26, 26);
   //adentro circulo cuerpo2
   fill(19, 120, 241);
   stroke(0);
   strokeWeight(1);
   ellipse(312, 317, 22, 22);

   //cuadrados adentro circulo rojo cuerpo3 
   fill(109, 103, 103);
   stroke(0);
   strokeWeight(1);
   rect(309, 308, 6, 6); //1
   rect(303, 314, 6, 6); //2
   rect(315, 314, 6, 6); //3
   rect(309, 320, 6, 6); //4

   //adentro circulo rojo cuerpo3
   fill(255, 0, 0);
   stroke(0);
   strokeWeight(2);
   ellipse(312, 317, 10, 10);

   //rayas blancas cuerpo izq
   fill(255, 255, 255); 
   stroke(0);
   strokeWeight(1);
   rect(260, 300, 9, 2);//1
   rect(260, 305, 9, 2);//2
   rect(260, 295, 9, 2);//3

   //rayas blancas cuerpo centro
   fill(255, 255, 255); 
   stroke(0);
   strokeWeight(1);
   rect(301, 280, 20, 3);//1
   rect(301, 285, 20, 3);//2
   rect(301, 290, 20, 3);//3

   //pies 
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(1.5);
   rect(222, 357, 40, 25);//izquierda
   fill(192, 189, 180);
   stroke(0);
   strokeWeight(1.5);
   rect(290, 357, 40, 30);//centro
   fill(255, 255, 255);
   stroke(0);
   strokeWeight(1.5);
   rect(360, 357, 38, 25);//derecha

   //rayas blancas pies
   fill(192, 189, 180); 
   stroke(0);
   strokeWeight(1);
   rect(233, 383, 20, 3);//izq
   rect(300, 388, 20, 3);//centro
   rect(370, 383, 20, 3);//der

   //C3PO 
   //manos
   fill(1223, 191, 36);
   stroke(0);
   strokeWeight(1.5);
   rect(169, 243, 20, 20); //izq
   rect(8, 243, 20, 20); //der

   //rayas cuerpo pecho
   fill(0, 0 ,0); 
   stroke(0);
   strokeWeight(2);
   line(140, 180, 60, 180); //1
   line(145, 190, 50, 190); //2


   //brazos
   fill(1223, 191, 36);// izquierdo
   stroke(0);
   strokeWeight(1.5);
   rotate(45 * Math.PI / 360);
   rect(100, 135, 25, 90);

   fill(1223, 191, 36);// derecho
   stroke(0);
   strokeWeight(1.5);
   rotate(-85 * Math.PI / 360);
   rect(70, 208, 25, 90);
  }