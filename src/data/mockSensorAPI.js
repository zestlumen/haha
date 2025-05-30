// src/data/mockSensorAPI.js

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export async function fetchMachineStatus() {
    await delay(200);
    return {
      지거기: '가동',
      텐타기: '대기',
      래피드기: '정지'
    };
  }
  
  export async function fetchSensorSummary() {
    await delay(200);
    return [
      { label: 'test1', value: 78 },
      { label: 'test2', value: 92 },
      { label: 'test3', value: 66 },
      { label: 'test4', value: 78 },
      { label: 'test5', value: 92 },
    ];
  }
  
  export async function fetchAlerts() {
    await delay(200);
    return [
      '지거기 고온 경고',
      '텐타기 온도 안정',
      '래피드기 센서 오류 감지'
    ];
  }
  
  export async function fetchSensorDetail(machineId) {
    await delay(200);
    return {
      avgTemperature: 78.4,  // °C 온도
      avgPressure: 1.3,    // bar 압력
      status: '정상',
      error: '',
      timestamps: ['14:00', '14:01', '14:02', '14:03', '14:04'],
      temperatures: [78.2, 78.3, 78.4, 78.5, 78.4],
    };
  }
  