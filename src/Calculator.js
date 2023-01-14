import { useEffect, useState } from 'react';

const Calculator = () => {


    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState();
    const [status, setStatus] = useState('');
    const [bool, setBool] = useState(false);
    const [color, setColor] = useState('');
    const [bgBool, setBgBool] = useState(false);
  
    
    const handleHeight = (event) =>{
        setHeight(event.target.value);
    };

    const handleWeight = (event) =>{
        setWeight(event.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setBmi((weight / ((height/100)**2)).toFixed(1));
        setBool(true);
        setBgBool(true);

        if(height !== '' && weight === ''){
            setBmi();
            setBool(false);
            setBgBool(false);
            alert('Please enter weight!');
        }else if(weight !== '' && height === ''){
            setBmi();
            setBool(false);
            setBgBool(false);
            alert('Please enter height!');
        }else if(height === '' && weight === ''){
            setBmi();
            setBool(false);
            setBgBool(false);
            alert('Please enter height and weight!');
        }
        
    };

    const handleReset = () =>{
        setHeight('');
        setWeight('');
        setBool(false);
        setBmi('');
        setBgBool('');
        setStatus('');
    };

    const span_style = {
        fontSize: "1.2rem",
         fontWeight: "600",
         color: "black"        
    }

    useEffect(() => {

        if(bmi === 18.5 || bmi < 18.6){
            setStatus("Underweight");
            setColor('#b6deff');
        }else if(bmi > 18.5 && bmi < 24.9){
            setStatus("Normal");
            setColor('#9dffbc');
        }else if(bmi > 25 && bmi < 29.9){
            setStatus("Overweight");
            setColor('#fffc8f');
        }else if(bmi > 30 && bmi < 34.9){
            setStatus("Obese");
            setColor('#ffc097');
        }else if(bmi > 35 && bmi < 39.9){
            setStatus("Severely Obese");
            setColor('#ffa695');
        }else if(bmi === 40 || bmi > 40){
            setStatus("Morbidly Obese");
            setColor('#ac4d4d');
        }

        console.log(bmi);
    },[bmi]);

    return (
    <>
    <div className="background" style={{ backgroundColor: bgBool ? color : '#ecc5fe'}}>
    <div className="wrapper">
        <h1 style={{marginBottom: '3.5vh'}}>BMI Calculator</h1>
    <form action="submit" onSubmit={handleSubmit}>
        <p>Height</p>
        <input className="text_i" placeholder="cm" type="number" name="height" value={height} onChange={handleHeight} />
        <p>Weight</p>
        <input className="text_i" placeholder="kg" type="number" name="weight" value={weight} onChange={handleWeight} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <input className="submit_b" type="submit" value="BMI"/>
        <input className="submit_b" type="button" onClick={handleReset} value="Reset" />
        </div>
    </form>

    <div className='result'>
        {bool && 
        <p className="p_style">BMI:<br /><span style={span_style}>{bmi}</span></p>
        }

        {bool && 
        <p className="p_style">Status:<br /><span style={span_style}>{status}</span></p>
        }
    </div>
    </div>
    </div>
    </>
);
}
 
export default Calculator;