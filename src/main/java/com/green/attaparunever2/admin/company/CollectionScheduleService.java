package com.green.attaparunever2.admin.company;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

@Service
@EnableScheduling
public class CollectionScheduleService {
    private final ThreadPoolTaskScheduler taskScheduler;
    private ScheduledFuture<?> scheduledFuture;

    // ThreadPoolTaskScheduler를 직접 초기화
    public CollectionScheduleService() {
        taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.initialize();
    }

    // 새로운 요일로 스케줄을 설정하는 메서드
    public void scheduleTaskForDay(DayOfWeek dayOfWeek) {
        // 기존에 설정된 스케줄이 있으면 취소
        if (scheduledFuture != null && !scheduledFuture.isCancelled()) {
            scheduledFuture.cancel(false);
        }

        // 새로운 크론 표현식 계산
        String cronExpression = getCronExpressionForDay(dayOfWeek);

        // 새로운 스케줄 작업 등록
        scheduledFuture = taskScheduler.schedule(this::processDeposits, new CronTrigger(cronExpression));
    }

    private String getCronExpressionForDay(DayOfWeek dayOfWeek) {
        // 요일에 따른 Cron 표현식 생성 (예: 화요일은 TUE, 월요일은 MON)
        Map<DayOfWeek, String> dayToCron = new HashMap<>();
        dayToCron.put(DayOfWeek.MONDAY, "0 0 9 ? * MON");
        dayToCron.put(DayOfWeek.TUESDAY, "0 0 9 ? * TUE");
        dayToCron.put(DayOfWeek.WEDNESDAY, "0 0 9 ? * WED");
        dayToCron.put(DayOfWeek.THURSDAY, "0 0 9 ? * THU");
        dayToCron.put(DayOfWeek.FRIDAY, "0 0 9 ? * FRI");
        dayToCron.put(DayOfWeek.SATURDAY, "0 0 9 ? * SAT");
        dayToCron.put(DayOfWeek.SUNDAY, "0 0 9 ? * SUN");

        return dayToCron.getOrDefault(dayOfWeek, "0 0 9 ? * MON");
    }

    // 입금 처리 로직
    public void processDeposits() {
        System.out.println("입금처리를 시작합니다.");
        // 입금 처리 작업 구현
    }
}
