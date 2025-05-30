// src/data/mockProgressAPI.js
export async function fetchMachineProgress() {
    return [
      {
        id: '지거기',
        status: '진행 중',
        progress: 65,
        eta: '16:30',
      },
      {
        id: '텐타기',
        status: '대기 중',
        progress: 0,
        eta: '-',
      },
      {
        id: '래피드기',
        status: '완료',
        progress: 100,
        eta: '15:50',
      },
      {
        id: '기기1',
        status: '진행 중',
        progress: 65,
        eta: '16:30',
      },
      {
        id: '기기2',
        status: '대기 중',
        progress: 0,
        eta: '-',
      },
      {
        id: '기기3',
        status: '완료',
        progress: 100,
        eta: '15:50',
      },
    ];
  }
  