const toggleMode = (e)=>{
    const html =document.querySelector('html');
   e.name === 'moon' ? (e.name = 'sunny', html.classList.add('dark')) : (e.name ='moon',html.classList.remove('dark'));
}
