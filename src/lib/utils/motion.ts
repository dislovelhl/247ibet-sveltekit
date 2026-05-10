/**
 * Svelte 5 Magnetic Button Action
 * Moves the element slightly toward the mouse cursor.
 */
export function magnetic(node: HTMLElement, power = 10) {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = node.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    
    node.style.setProperty('--mx', `${(x / width) * power}px`);
    node.style.setProperty('--my', `${(y / height) * power}px`);
  };

  const handleMouseLeave = () => {
    node.style.setProperty('--mx', '0px');
    node.style.setProperty('--my', '0px');
  };

  node.addEventListener('mousemove', handleMouseMove);
  node.addEventListener('mouseleave', handleMouseLeave);

  return {
    destroy() {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
}

/**
 * Svelte 5 3D Tilt Action
 * Rotates the element based on mouse position.
 */
export function tilt(node: HTMLElement, intensity = 15) {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = node.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    node.style.setProperty('--rx', `${rotateX}deg`);
    node.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    node.style.setProperty('--rx', '0deg');
    node.style.setProperty('--ry', '0deg');
  };

  node.addEventListener('mousemove', handleMouseMove);
  node.addEventListener('mouseleave', handleMouseLeave);

  return {
    destroy() {
      node.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
}
