const { useState,  useMemo, useCallback } = require("react");
                //useEffect

//useMemo - > salvar variaveis
//useCallBack -> salvar referencia de função
const Teste1 = () => {
    const [name, setName] = useState('bruno');//retorna array com duas opções
    const [age, setAge] = useState(27);

    const changeName = useCallback(() => {
        setName(prev => prev === 'Bruno' ? 'José' : 'Bruno')
    }, []) 

    //useEffect(()=>{
    //    changeName();
   // }, [])//funcão e array de dependência


    const calc = useMemo(() => {//guardar dados na memoria sem ficar renderizando varias vezes
        return 10 * age;
    }, [age]); 

    const changeAge = useCallback(() => {
        //const newAge = 10 * age;
        setAge(prev => prev === 27 ? 35 :27)
    },[])



    return(
        <div>UseTeste
            <p>{name}</p>
            <br/>
            <p>{calc}</p>
            <br/>
            <p>Idade: {age}</p>
            <br/>
            <br/>
            <button onClick={changeName}>Alterar Nome</button><br/>
            <button onClick={changeAge}>Alterar Idade</button>
        </div>
    )
}

export {Teste1}