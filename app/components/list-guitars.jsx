import Guitar from './guitar';

function ListGuitars({ guitars }) {
  return (
    <>
      {guitars?.length && (
        <div className="store__content">
          {guitars?.map(guitar => (
            <Guitar
              key={guitar?.id}
              guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListGuitars;