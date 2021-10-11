import { Notify } from 'react-vant';

export function checkStatus(status: number) {
  if (status > 400) {
    Notify.show({ message: '失败', duration: 0 });
    return
  }
  Notify.show({ message: '成功', duration: 0, type: 'success' });
}
