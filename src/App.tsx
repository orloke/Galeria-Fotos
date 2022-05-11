import { useEffect, useState, FormEvent } from 'react';
import * as Photos from './services/photos'
import * as C from './App.styles'
import { Photo } from './types/Photos';
import { PhotoItem } from './components/PhotoItem'


function App() {

  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])


  const getPhotos = async () =>{
    setLoading(true)
    setPhotos(await Photos.getAll())
    setLoading(false)
  }

  useEffect(()=>{
    getPhotos()

  },[])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    var formData = new FormData(e.currentTarget)
    var file = formData.get('image') as File

    if(file.size){
      var con = true
      for(let i in photos){
        if(file.name === photos[i].name){
          con = window.confirm(`${file.name} já existe. Deseja substituí-lo?`)                  
        }        
      }
      
      if (con) {
        setUploading(true)
        let result = await Photos.insert(file)
        setUploading(false)
        
        if( result instanceof Error){
          return alert(`${result.name} - ${result.message}`)
        }else{
          getPhotos()
        }
      }
    }if(!file.size){
      return alert('Escolha um arquivo!')
    }
  }

  const deletar = async (escreva:string) =>{
    await Photos.destroy(escreva)
    getPhotos()
  }
  

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <div>
            <input type="file" name='image'/>      
            {uploading && <p>Enviando...</p>}
          </div>
          <input type="submit" value = 'enviar' />
        </C.UploadForm>

        {loading &&
          <C.Fotos>
            <div className='emoji'>🖐️</div>
            <div>Carregando...</div>
          </C.Fotos>
        }

        {!loading && photos.length>0 &&
        <C.PhotoList>
          {photos.map((item,index)=>(
            <PhotoItem key={index} url = {item.url} name = {item.name} deletar = {deletar}/>
          ))
          }
        </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.Fotos>
            <div className='emoji'>😢</div>
            <div>Não tem nenhuma foto!</div>
          </C.Fotos>
        }

      </C.Area>
    </C.Container>
  );
}

export default App;
