import { Photo } from "../types/Photos";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

export const getAll = async () => {
    let list: Photo[] = []

    const imageFolder = ref(storage, 'images')
    const photoList = await listAll(imageFolder)

    for (let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }
    return list
}

export const insert =async (file:File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let newFile = ref(storage,`images/${file.name}`)
        let upload = await uploadBytes(newFile,file)
        let uploadUrl  = await getDownloadURL(upload.ref)

        return {name: upload.ref.name, url: uploadUrl} as Photo
    }
    else{
        return new Error('Tipo de arquivo não permitido.')
    }
}

export const destroy = async (name:string) => {
    const fileDelete = ref(storage, `images/${name}`)
    await deleteObject(fileDelete)
}

export const DownloadPhoto = async (name:string)=>{
    const down = ref(storage,`images/${name}`)
    const tetes = await getDownloadURL(down)
    console.log(tetes);
    
}