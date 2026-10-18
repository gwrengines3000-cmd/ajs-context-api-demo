// components/NotificationList.jsx
import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const NotificationList = () => {
    const { notifications, removeNotification } = useContext(NotificationContext)

    if (!notifications.length) return <div>No notifications</div>

    return (
        <div>
            <h3>Notifications</h3>
            {notifications.map(({ id, message }) => (
                <div key={id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span>{message}</span>
                    <button
                        onClick={() => removeNotification(id)}
                    >Dismiss</button>
                </div>
            ))}
        </div>
    )
}

export default NotificationList
