import { Button } from "./Button"
import { Contador } from "./Contador"

export const Main = () => {
    return (
       <main>
            <h2>Home</h2>
            <Button
            //son como parámetros que se envian al componente, si fuera etiqueta, lo toma como otra cosa
                nombre="Horacio"
                edad="35"
                vive="true"
                /*
                soyUnProp="Soy un valor string"
                soyOtroProp={1}*/
            />
            <Button/>
            <Button/>
            <Contador/>
       </main>
    )
}
