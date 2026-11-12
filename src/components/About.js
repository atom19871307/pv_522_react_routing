function About() {
    return (
        <>
        <h1>Routing</h1>
        <p>
        <strong>Маршруизация</strong> &#8213;
                это переключение между страницами в одностраничном приложении.
                Сам по себе React маршрутизацию не поодерживает,
                ее нужно доустанавливать в проект при помощи команды:
            </p>
                <pre>
                npm install --save-dev react-router-dom
            </pre>
            <p>
                Кроме того, вызов компонент App s и файле index. js обернуть компонент
                BrowserRouter BrowserRouter, который импортируется из файла 'react-router-
                dom'.
            </p>


        </>
    )
}
export default About;