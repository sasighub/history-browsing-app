import './index.css'

const HistoryItem = props => {
  const {historyObj, updateHistoryList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyObj

  const onClickDelete = () => {
    updateHistoryList(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="icon-container">
        <img className="logo-url" src={logoUrl} alt="domain logo" />
        <div className="website-name-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          className="delete-button"
          type="button"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
