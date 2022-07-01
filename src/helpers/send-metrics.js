module.exports = (io, span, service) => {
  io.emit('esm_stats', {
    os: span.os[0],
    responses: span.responses[span.responses.length - 2],
    interval: span.interval,
    retention: span.retention,
    service: service.name,
  });
};
