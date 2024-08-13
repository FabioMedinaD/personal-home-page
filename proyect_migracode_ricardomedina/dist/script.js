var Huancaina_Potate, Picarones, Lomo;


Huancaina_Potate = ['https://upload.wikimedia.org/wikipedia/commons/1/14/Huancaina_con_aceituna.jpg', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_0_600.webp', 'https://es.wikihow.com/images/thumb/f/f5/Cutting-%26-boiling.jpg/728px-Cutting-%26-boiling.jpg.webp', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_5_600.webp', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_1_600.webp', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_2_600.webp', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_3_600.webp', 'https://cdn0.recetasgratis.net/es/posts/9/9/7/papas_a_la_huancaina_52799_paso_4_600.webp'];
Picarones = ['https://upload.wikimedia.org/wikipedia/commons/e/ea/Picarones.jpg', 'https://cdn0.recetasgratis.net/es/posts/6/6/4/picarones_peruanos_76466_paso_3_600.webp', 'https://cdn0.recetasgratis.net/es/posts/6/6/4/picarones_peruanos_76466_paso_6_600.webp', 'https://cdn0.recetasgratis.net/es/posts/6/6/4/picarones_peruanos_76466_paso_7_600.webp', 'https://cdn0.recetasgratis.net/es/posts/6/6/4/picarones_peruanos_76466_paso_8_600.webp', 'https://cdn0.recetasgratis.net/es/posts/6/6/4/picarones_peruanos_76466_paso_0_600.webp'];
Lomo = ['https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg', 'https://mojo.generalmills.com/api/public/content/923nJHWog0e3VvmRtgUuFQ_gmi_hi_res_jpeg.jpeg?v=f2bf60b1&t=edd358cbc62c424e9dfd35d49c2bcb37', 'https://cdn.elcocinerocasero.com/imagen/paso-receta/1000/2022-03-23-12-49-03/lomo-saltado-paso-7.jpeg', 'https://mojo.generalmills.com/api/public/content/8xgtpJoCQUSAVtJX05MzIA_gmi_hi_res_jpeg.jpeg?v=d7271e5b&t=edd358cbc62c424e9dfd35d49c2bcb37', 'https://mojo.generalmills.com/api/public/content/vvxAqmLsjU6LVV930YLnqQ_gmi_hi_res_jpeg.jpeg?v=a4d9e803&t=edd358cbc62c424e9dfd35d49c2bcb37'];

let element_huanca = document.getElementById('huanca');
Huancaina_Potate.push(Huancaina_Potate[0]);
element_huanca.setAttribute("src", Huancaina_Potate.shift());
let element_lomi = document.getElementById('lomi');
Lomo.push(Lomo[0]);
element_lomi.setAttribute("src", Lomo.shift());
let element_picaro = document.getElementById('picaro');
Picarones.push(Picarones[0]);
element_picaro.setAttribute("src", Picarones.shift());


document.getElementById('huancainaB').addEventListener('click', (event) => {
  let element_huanca2 = document.getElementById('huanca');
  Huancaina_Potate.unshift(Huancaina_Potate.slice(-1)[0]);
  element_huanca2.setAttribute("src", Huancaina_Potate.pop());

});

document.getElementById('huancainaN').addEventListener('click', (event) => {
  let element_huanca3 = document.getElementById('huanca');
  Huancaina_Potate.push(Huancaina_Potate[0]);
  element_huanca3.setAttribute("src", Huancaina_Potate.shift());

});

document.getElementById('lomitoB').addEventListener('click', (event) => {
  let element_lomi2 = document.getElementById('lomi');
  Lomo.unshift(Lomo.slice(-1)[0]);
  element_lomi2.setAttribute("src", Lomo.pop());

});

document.getElementById('lomitoN').addEventListener('click', (event) => {
  let element_lomi3 = document.getElementById('lomi');
  Lomo.push(Lomo[0]);
  element_lomi3.setAttribute("src", Lomo.shift());

});

document.getElementById('picaronB').addEventListener('click', (event) => {
  let element_picaro2 = document.getElementById('picaro');
  Picarones.unshift(Picarones.slice(-1)[0]);
  element_picaro2.setAttribute("src", Picarones.pop());

});

document.getElementById('picaronN').addEventListener('click', (event) => {
  let element_picaro3 = document.getElementById('picaro');
  Picarones.push(Picarones[0]);
  element_picaro3.setAttribute("src", Picarones.shift());

});