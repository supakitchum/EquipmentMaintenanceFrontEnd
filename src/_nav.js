var items = []
if (localStorage.type == "user") {
   items.push(
        {
            name: 'รายการแจ้งซ่อม',
            url: '/users/repair',
            icon: 'icon-note'
        },        
        {
            name: 'ประวัติการแจ้งซ่อม',
            url: '/users/history',
            icon: 'icon-layers'
        }
    )
} else if (localStorage.type == "admin") {
    items.push(
        {
            name: 'แดชบอร์ด',
            url: '/dashboard',
            icon: 'icon-speedometer',
        },
        {
            name: 'จัดการผู้ใช้',
            url: '/manageuser',
            icon: 'icon-pencil'
        },
        {
            name: 'จัดการช่างซ่อม',
            url: '/manageTechnician',
            icon: 'icon-pencil'
        },
        {
            name: 'รายงาน',
            url: '/report',
            icon: 'icon-calculator'
        }
    )
} else {
    items.push(      
        {
            name: 'อัพเดทสถานะการซ่อม',
            url: '/updatefix',
            icon: 'icon-layers'
        },
        {
            name: 'ประวัติการซ่อม',
            url: '/history',
            icon: 'icon-note'
        }
    )
}
export default {
    items: items

}