import './index.css'

const TabItem = props => {
  const {tabDetails, getTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTabId = () => {
    getTabId(tabId)
  }

  const activeTabClassName = isActive ? "active-tab-btn" : ""

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
