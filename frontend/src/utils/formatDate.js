// ==============================================
// FORMAT FULL DATE
// ==============================================

export const formatFullDate = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(

        "en-IN",

        {

            day: "numeric",

            month: "long",

            year: "numeric"
        }
    );
};


// ==============================================
// FORMAT DATE + TIME
// ==============================================

export const formatDateTime = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleString(

        "en-IN",

        {

            day: "numeric",

            month: "short",

            year: "numeric",

            hour: "2-digit",

            minute: "2-digit"
        }
    );
};


// ==============================================
// FORMAT TIME ONLY
// ==============================================

export const formatTime = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleTimeString(

        "en-IN",

        {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit"
        }
    );
};


// ==============================================
// FORMAT RELATIVE TIME
// ==============================================

export const formatRelativeTime = (

    date

) => {

    if (!date) return "N/A";

    const now = new Date();

    const targetDate = new Date(date);

    const diffInSeconds = Math.floor(

        (now - targetDate) / 1000
    );

    // ==========================================
    // SECONDS
    // ==========================================

    if (diffInSeconds < 60) {

        return `${diffInSeconds}s ago`;
    }

    // ==========================================
    // MINUTES
    // ==========================================

    const diffInMinutes = Math.floor(

        diffInSeconds / 60
    );

    if (diffInMinutes < 60) {

        return `${diffInMinutes}m ago`;
    }

    // ==========================================
    // HOURS
    // ==========================================

    const diffInHours = Math.floor(

        diffInMinutes / 60
    );

    if (diffInHours < 24) {

        return `${diffInHours}h ago`;
    }

    // ==========================================
    // DAYS
    // ==========================================

    const diffInDays = Math.floor(

        diffInHours / 24
    );

    if (diffInDays < 7) {

        return `${diffInDays}d ago`;
    }

    // ==========================================
    // FALLBACK
    // ==========================================

    return formatFullDate(date);
};


// ==============================================
// FORMAT SHORT DATE
// ==============================================

export const formatShortDate = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(

        "en-IN",

        {

            day: "2-digit",

            month: "2-digit",

            year: "numeric"
        }
    );
};


// ==============================================
// FORMAT ANALYTICS DATE
// ==============================================

export const formatAnalyticsDate = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(

        "en-IN",

        {

            month: "short",

            day: "numeric"
        }
    );
};


// ==============================================
// FORMAT MONTH YEAR
// ==============================================

export const formatMonthYear = (

    date

) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(

        "en-IN",

        {

            month: "long",

            year: "numeric"
        }
    );
};


// ==============================================
// FORMAT VERIFICATION TIMESTAMP
// ==============================================

export const formatVerificationTimestamp = (

    date

) => {

    if (!date) return "Verification Pending";

    return `Verified on ${formatDateTime(date)}`;
};


// ==============================================
// FORMAT PROCESSING TIME
// ==============================================

export const formatProcessingTime = (

    milliseconds

) => {

    if (!milliseconds && milliseconds !== 0) {

        return "N/A";
    }

    // ==========================================
    // LESS THAN 1 SECOND
    // ==========================================

    if (milliseconds < 1000) {

        return `${milliseconds} ms`;
    }

    // ==========================================
    // SECONDS
    // ==========================================

    return `${(milliseconds / 1000).toFixed(1)} s`;
};


// ==============================================
// FORMAT COUNTDOWN
// ==============================================

export const formatCountdown = (

    seconds

) => {

    if (!seconds && seconds !== 0) {

        return "00:00";
    }

    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};


// ==============================================
// GET CURRENT TIMESTAMP
// ==============================================

export const getCurrentTimestamp = () => {

    return new Date().toISOString();
};


// ==============================================
// CHECK IF TODAY
// ==============================================

export const isToday = (

    date

) => {

    if (!date) return false;

    const today = new Date();

    const targetDate = new Date(date);

    return (

        today.getDate() ===
        targetDate.getDate()

        &&

        today.getMonth() ===
        targetDate.getMonth()

        &&

        today.getFullYear() ===
        targetDate.getFullYear()
    );
};


// ==============================================
// CHECK IF YESTERDAY
// ==============================================

export const isYesterday = (

    date

) => {

    if (!date) return false;

    const yesterday = new Date();

    yesterday.setDate(

        yesterday.getDate() - 1
    );

    const targetDate = new Date(date);

    return (

        yesterday.getDate() ===
        targetDate.getDate()

        &&

        yesterday.getMonth() ===
        targetDate.getMonth()

        &&

        yesterday.getFullYear() ===
        targetDate.getFullYear()
    );
};


// ==============================================
// FORMAT ACTIVITY LOG TIME
// ==============================================

export const formatActivityLogTime = (

    date

) => {

    if (!date) return "Unknown";

    if (isToday(date)) {

        return `Today at ${formatTime(date)}`;
    }

    if (isYesterday(date)) {

        return `Yesterday at ${formatTime(date)}`;
    }

    return formatDateTime(date);
};