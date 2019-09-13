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
            icon: 'fa fa-history'
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
            icon: 'fa fa-users'
        },
        {
            name: 'จัดการช่างซ่อม',
            url: '/manageTechnician',
            icon: 'fa fa-user'
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
            icon: 'fa fa-pencil-square-o'
        },
        {
            name: 'ประวัติการซ่อม',
            url: '/history',
            icon: 'fa fa-history'
        }
    )
}
export default {
    items: items

}