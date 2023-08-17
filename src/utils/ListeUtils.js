export class ListeUtils {

    orderList(liste, orderItem, sensOrder){
        return liste.sort((a, b) => {
            if(sensOrder === 'asc'){
                if (a[orderItem] < b[orderItem]) {
                    return -1;
                  }
                  if (a[orderItem] > b[orderItem]) {
                    return 1;
                  }
                  return 0;
            } else {
                if (a[orderItem] > b[orderItem]) {
                    return -1;
                  }
                  if (a[orderItem] < b[orderItem]) {
                    return 1;
                  }
                  return 0;
            }
        })
    }

}