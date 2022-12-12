import './Image.css'

function Image(props){


   const imageSrc = props.imageSrc
   

   return (
      <div className='imageView'>



        <img src={imageSrc}/>

      </div>
   )


}


export default Image;