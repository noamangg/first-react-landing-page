import { clients } from "../constants"
function Clients() {
  return (
    <section className="flex-center my-4">
      <div className="flex-center flex-wrap w-full gap-2">
        {clients.map((client) => (
          <div key={client.id} className="flex-1 flex-center sm:min-w-[192px] min-w-[120px]">
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients