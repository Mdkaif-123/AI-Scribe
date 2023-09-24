/* eslint-disable react/prop-types */


function Heading(props) {
    const { heading } = props
    return (
        <section>
            <div className="text-center heading m-4 font-semibold text-[#424248] text-2xl md:mx-6 md:text-start  dark:text-[#cad1d8] ">
                {heading}
            </div>  
        </section>
    )
}

export default Heading
