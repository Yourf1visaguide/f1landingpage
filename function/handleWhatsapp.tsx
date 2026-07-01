
export const phone = 917717446052;

export const handleWhatsappClick = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  export const handleWhatsappClickWithMessage = (
  message = "Hello, I visited your website and would like to start my visa application."
) => {
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};