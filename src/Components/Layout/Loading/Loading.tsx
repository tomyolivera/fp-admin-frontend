import {useEffect} from "react"
// @ts-ignore
import NProgress from 'nprogress'

const Loading = () => {
    useEffect(() => {
        NProgress.start()

        return () => {
            NProgress.done()
        }
    }, [])

    return (
        <div className="flex justify-center items-center gap-5">
            {/*<p className={"text-xl"}>Cargando</p>*/}
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-l-4 border-blue-600"></div>
        </div>
    )
}

export default Loading