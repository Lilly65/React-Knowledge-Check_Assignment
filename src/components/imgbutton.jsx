import myImage from '../assets/colond.jpg'; // Import your image

function ImgButton() {
  return (
    <>
        <div className="container-fluid px-0">
            <div className="row gx-0">
                <div className="col-12">
                    <img 
                        src={myImage} 
                        className="img-fluid w-100" 
                        alt="A responsive image" 
                    />
                </div>
            </div>
        </div>
        
        <img 
            src={myImage} 
            className="rounded-circle mx-auto d-block my-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover'}} 
        />

        
        <button type="button" className="btn btn-primary btn-lg mx-auto d-block my-4" >
        Button 1
        </button>
        <button type="button" className="btn btn-primary btn-lg mx-auto d-none d-md-block my-4" >
        Button 2 (desktop only)
        </button>
    </>
  );
}

export default ImgButton;