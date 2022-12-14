import SlideProduct from "@/components/product/gallery/SlideProduct";
import ModalProduct from "@/components/product/gallery/SlideProduct";
import { useState } from "react";


export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true)
    const handleCloseModal = () => setIsOpenModal(false)

    return (
        <>
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className="grid md:grid-cols-4 md:gap-5 2xl:max-w-[600px] 2xl:mx-auto"
                handleOpenModal={handleOpenModal} />

            {
                isOpenModal
                && (
                    <>
                        < ModalProduct
                            isOpenModal={isOpenModal}
                            ARRAY_IMGS={ARRAY_IMGS}
                            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                            className="hidden md:grid md:grid-cols-4 md:gap-5 md:absolute md:top-1/2 md:left-1/2 md:max-w-xl md:-translate-y-1/2 md:-translate-x-1/2 z-10"
                            handleCloseModal={handleCloseModal} />
                        <span className="md:fixed top-0 left-0 h-full w-full bg-black/70"></span>
                    </>
                )}
        </>
    )
}