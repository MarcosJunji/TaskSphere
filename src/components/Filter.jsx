const Filter = ({ filter, setFilter, setSort }) => {
    return (
      <div className="filter">
          <h2>Filtrar:</h2>
          <div className="filter-options">
              <div>
                  <p>Status:</p>
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                      <option value="All">Todas</option>
                      <option value="Completed">Completas</option>
                      <option value="Incomplete">Incompletas</option>
                  </select>
              </div>
              <div>
                  <p>Prioridade:</p>
                  <button onClick={() => setSort("Asc")} className="btn-filter">Maior</button>
                  <button onClick={() => setSort("Desc")} className="btn-filter">Menor</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default Filter