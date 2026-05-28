import cv2
import numpy as np


# =========================================
# LOAD IMAGE
# =========================================

def load_image(image_path):

    image = cv2.imread(image_path)

    if image is None:

        raise ValueError(
            f"Unable to load image: {image_path}"
        )

    return image


# =========================================
# RESIZE IMAGE
# =========================================

def resize_image(
    image,
    width=600
):

    height = int(
        image.shape[0] *
        (width / image.shape[1])
    )

    resized = cv2.resize(
        image,
        (width, height)
    )

    return resized


# =========================================
# CONVERT TO GRAYSCALE
# =========================================

def convert_to_grayscale(image):

    return cv2.cvtColor(
        image,
        cv2.COLOR_BGR2GRAY
    )


# =========================================
# REMOVE NOISE
# =========================================

def remove_noise(image):

    return cv2.bilateralFilter(
        image,
        11,
        17,
        17
    )


# =========================================
# GAUSSIAN BLUR
# =========================================

def apply_gaussian_blur(
    image,
    kernel_size=(5, 5)
):

    return cv2.GaussianBlur(
        image,
        kernel_size,
        0
    )


# =========================================
# HISTOGRAM EQUALIZATION
# =========================================

def enhance_contrast(gray_image):

    return cv2.equalizeHist(
        gray_image
    )


# =========================================
# ADAPTIVE THRESHOLDING
# =========================================

def adaptive_threshold(image):

    return cv2.adaptiveThreshold(
        image,
        255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY,
        11,
        2
    )


# =========================================
# OTSU THRESHOLDING
# =========================================

def otsu_threshold(image):

    _, thresh = cv2.threshold(
        image,
        0,
        255,
        cv2.THRESH_BINARY +
        cv2.THRESH_OTSU
    )

    return thresh


# =========================================
# EDGE DETECTION
# =========================================

def detect_edges(
    image,
    threshold1=100,
    threshold2=200
):

    return cv2.Canny(
        image,
        threshold1,
        threshold2
    )


# =========================================
# MORPHOLOGICAL OPERATIONS
# =========================================

def morphology_close(image):

    kernel = np.ones(
        (3, 3),
        np.uint8
    )

    return cv2.morphologyEx(
        image,
        cv2.MORPH_CLOSE,
        kernel
    )


def morphology_open(image):

    kernel = np.ones(
        (3, 3),
        np.uint8
    )

    return cv2.morphologyEx(
        image,
        cv2.MORPH_OPEN,
        kernel
    )


# =========================================
# IMAGE SHARPENING
# =========================================

def sharpen_image(image):

    kernel = np.array([
        [0, -1, 0],
        [-1, 5, -1],
        [0, -1, 0]
    ])

    sharpened = cv2.filter2D(
        image,
        -1,
        kernel
    )

    return sharpened


# =========================================
# ROTATE IMAGE
# =========================================

def rotate_image(
    image,
    angle
):

    height, width = image.shape[:2]

    center = (
        width // 2,
        height // 2
    )

    matrix = cv2.getRotationMatrix2D(
        center,
        angle,
        1.0
    )

    rotated = cv2.warpAffine(
        image,
        matrix,
        (width, height)
    )

    return rotated


# =========================================
# IMAGE NORMALIZATION
# =========================================

def normalize_image(image):

    normalized = cv2.normalize(
        image,
        None,
        0,
        255,
        cv2.NORM_MINMAX
    )

    return normalized


# =========================================
# FIND CONTOURS
# =========================================

def find_contours(image):

    contours, hierarchy = cv2.findContours(
        image,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    return contours, hierarchy


# =========================================
# DRAW BOUNDING BOX
# =========================================

def draw_bounding_box(
    image,
    x,
    y,
    w,
    h,
    color=(0, 255, 0),
    thickness=2
):

    cv2.rectangle(
        image,
        (x, y),
        (x + w, y + h),
        color,
        thickness
    )

    return image


# =========================================
# SAVE IMAGE
# =========================================

def save_image(
    image,
    save_path
):

    cv2.imwrite(
        save_path,
        image
    )

    return save_path


# =========================================
# COMPLETE PREPROCESSING PIPELINE
# =========================================

def preprocess_image(image_path):

    image = load_image(image_path)

    resized = resize_image(image)

    gray = convert_to_grayscale(
        resized
    )

    denoised = remove_noise(
        gray
    )

    contrast = enhance_contrast(
        denoised
    )

    thresh = adaptive_threshold(
        contrast
    )

    edges = detect_edges(
        contrast
    )

    morph = morphology_close(
        thresh
    )

    return {
        "original": image,
        "resized": resized,
        "gray": gray,
        "denoised": denoised,
        "contrast": contrast,
        "threshold": thresh,
        "edges": edges,
        "morphology": morph
    }