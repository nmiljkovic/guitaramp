export const curves = {
  blues(amount, curve, n) {
    const k = amount * 10;

    for (let i = 0, x; i <= n; ++i) {
      x = i * 2 / n - 1;
      curve[i] = Math.tanh(0.5 * k * k * x * Math.PI);
    }
  },
  sunshine(amount, curve, n) {
    const k = amount * 10;

    for (let i = 0, x, y; i <= n; ++i) {
      x = i * 2 / n - 1;
      y = Math.tanh(0.5 * x * k * Math.PI);
      curve[i] = Math.tanh(0.5 * y * k * Math.PI) * Math.cos(0.5 * y);
    }
  },
  // A nonlinearity by Partice Tarrabia and Bram de Jong.
  driver(amount, curve, n) {
    const k = amount * 100;

    for (let i = 0, x; i < n; ++i) {
      x = i * 2 / n - 1;

      curve[i] = (1 + k / 101) * x / (1 + k / 101 * Math.abs(x));
    }
  },
  sustained(amount, curve, n) {
    const k = 1 - amount;

    for (let i = 0, x, y; i < n; ++i) {
      x = i * 2 / n - 1;
      y = x < 0 ? -Math.pow(Math.abs(x), k + 0.04) : Math.pow(x, k);
      curve[i] = Math.tanh(y * 2);
    }
  },
  // Arctangent nonlinearity.
  arch(amount, curve, n) {
    const k = Math.max(amount, 0.01) * 100;

    for (let i = 0, x; i < n; ++i) {
      x = i * 2 / n - 1;
      curve[i] = (2 / Math.PI) * Math.atan(k * x);
    }
  },
  // A cubic nonlinearity, soft-clip, input range: [-1, 1]
  cubic(amount, curve, n) {
    for (let i = 0, x; i < n; ++i) {
      x = i * 2 / n - 1;
      curve[i] = 1.5 * x - 0.5 * Math.pow(x, 3);
    }
  }
};

export function makeDistortionCurve(amount, n, type) {
  const curve = new Float32Array(n);

  curves[type](amount, curve, n);

  return curve;
}
