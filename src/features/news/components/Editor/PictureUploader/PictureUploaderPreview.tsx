import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";

import Button from "src/commons/components/Button";

import styles from './PictureUploaderPreview.module.scss';

interface PictureUploaderPreviewProps {
  file: File;
  onBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PictureUploaderPreview = (props: PictureUploaderPreviewProps) => {
  const { file, onBack } = props;

  const [grabbing, setGrabbing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    const url = URL.createObjectURL(file);
    const img = new Image();
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let isDragging = false;
    let x = 0;
    let y = 0;
    let dragY: number = 0;

    const drawImage = () => {
      const imgWidth = canvasWidth;
      const imgHeight = img.height / img.width * imgWidth;

      x = Math.max(Math.min(x, 0), canvasWidth - imgWidth);
      console.log(imgHeight, canvasHeight);
      y = Math.max(Math.min(y, 0), canvasHeight - imgHeight);
      ctx.drawImage(img, x, y, imgWidth, imgHeight);
    }
    const onMouseDown = (e: MouseEvent) => {
      dragY = e.clientY;
      isDragging = true;
      setGrabbing(true);
    }
    const onMouseUp = (e: MouseEvent) => {
      isDragging = false;
      setGrabbing(false);
    }
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const offsetY = e.clientY - dragY;
        y += offsetY;
        console.log(e.clientY, e.clientY - dragY, y);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawImage();
        dragY = e.clientY;
      }
    }

    img.onload = () => {
      drawImage();
    }
    img.src = url;

    canvas.onmousedown = onMouseDown;
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);;

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [file]);

  const canvasClassName = useMemo(() => {
    if (grabbing) {
      return classNames(styles.canvas, styles.st_grabbing);
    } else {
      return styles.canvas;
    }
  }, [grabbing]);

  useEffect(() => {
    if (grabbing) {
      document.documentElement.classList.add(styles.st_grabbing);
    } else {
      document.documentElement.classList.remove(styles.st_grabbing);
    }
  }, [grabbing]);

  return (
    <div className={styles.pictureUploader}>
      <Button variant="filled" onClick={onBack} className={styles.button}>
        Choose another picture
      </Button>
      <canvas className={styles.canvas} ref={canvasRef} />
    </div>
  );
};

export default PictureUploaderPreview;