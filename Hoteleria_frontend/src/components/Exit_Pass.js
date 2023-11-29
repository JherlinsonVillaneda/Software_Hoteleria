import React, { useState } from "react";
import "./Exit_Pass.css";
import NavBarForm from './NavBarForm';
import Swal from "sweetalert2";

const Exit_Pass = () => {
  const [formData, setFormData] = useState({
    idOutletPass: 0,
    nameCustomer: "",
    date: "",
    idAssignedRoom: "",
    guestsCount: "",
    keyRoom: false,
    cashierName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/outletPass/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        // Manejar casos donde la respuesta no es exitosa (status code no es 200-299)
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      Swal.fire({
        icon: "success",
        title: "Autenticación Exitosa",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/ExitPass";
      });
  
      console.log("Response message from the backend:", data);
    } catch (error) {
      console.error("Error:", error);
      // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
      Swal.fire({
        icon: "success",
        title: "Autenticación Exitosa",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/ExitPass";
      });
    }
  };

  return (
    <>
      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
              <div className='underline-up'><span className="palabra">Pase De Salida</span><div className="subrayado-OutletPass"></div ></div> 
            </h5> 
        <a className="nav-link active col-md-1">DESCARGAR</a>
        <a className="nav-link active col-md-2">CORREO</a>
      </div>

      <NavBarForm/>

      <hr className="border border-dark" />

      <section className="Seccion-Pass col-md-7 offset-md-3 d-flex align-items-center justify-content-center">
        <div className="container-Exit-pass m-3">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="card col-md-6 offset-md-3 d-flex align-items-center justify-content-center border border-dark">
              <div className="card-body">
                <h4 className="card-title">Pase de salida</h4>
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="nameCustomer" className="form-label-Nombre">
                Nombre de el cliente
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="nameCustomer"
                name="nameCustomer"
                value={formData.nameCustomer}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 border border-dark">
              <label htmlFor="date" className="form-label">
                Fecha:
              </label>
              <input
                type="date"
                className="form-control form-control-nombre border-0"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 border border-dark">
              <label htmlFor="idAssignedRoom" className="form-label">
                Numero de habitacion
              </label>
              <input
                type="number"
                className="form-control form-control-nombre border-0"
                id="idAssignedRoom"
                name="idAssignedRoom"
                value={formData.idAssignedRoom}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 border border-dark">
              <label htmlFor="guestsCount" className="form-label">
                Numero de huespedes
              </label>
              <input
                type="number"
                className="form-control form-control-nombre border-0"
                id="guestsCount"
                name="guestsCount"
                value={formData.guestsCount}
                onChange={handleChange}
              />
            </div>
            <label className="form-label">¿Dejo su llave?</label>
            <select
              className="form-select-Key form-select-md mg-3 form-control border border-dark"
              aria-label=".form-select-lg example"
              name="keyRoom"
              value={formData.keyRoom}
              onChange={handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <div className="col-md-6">
              <label htmlFor="cashierName" className="form-label">
                Nombre de el cajero
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="cashierName"
                name="cashierName"
                value={formData.cashierName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Sello de cajero
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="inputPassword4"
              />
            </div>
            <button className="fixed-button" onClick={handleSubmit}>
        <div className="save-icon"></div>
      </button>
          </form>
        </div>
        
      </section>
    </>
  );
};

export default Exit_Pass;