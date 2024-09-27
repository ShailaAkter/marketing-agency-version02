
const Modal = ({modalTitle, modalContent, openModal, closeModal}) => 
{
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => 
  {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => 
  {
    setIsModalOpen(false);
    setModalContent(null);
  };
  
  return (
    <div>
    {
      isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-2">{modalTitle}</h2>
          <p className="text-gray-700 mb-4">{modalContent}</p>
          <ActionButton onclick={() => onClick(closeModal)}>
            Close
          </ActionButton>
        </div>
      </div>
    )}
    </div>
  )
}

export default Modal