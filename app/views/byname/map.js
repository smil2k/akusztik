function(doc) {
  emit(doc._id, doc.Performer.Value)
}
