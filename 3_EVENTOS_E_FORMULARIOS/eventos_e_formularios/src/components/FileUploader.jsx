import {useState} from 'react'

const FileUploader = () => {
    const[file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    

    const handleChange= (e) => {
        const file = e.target.files[0];
        setFile(file);

        if(file && file.type.startsWith("image/")) {
            const fileURL = URL.createObjectURL(file);
            setPreview(fileURL);
        } else {
            setPreview(null);
        }
    }

    return (
        <div>

            <p>Insira uma imagem: </p>
            <form>

                <input type="file" onChange={handleChange}/>
                {file && <p>Arquivo escolhido: {file.name} </p>}
                {preview && <img src={preview} alt='Preview' style={{ width: '200px' }} />}
            </form>
        </div>
    )
}

export default FileUploader