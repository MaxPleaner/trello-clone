json.(list, :id, :board_id, :title, :created_at, :updated_at, :ord)

cards ||= nil
unless cards.nil?
  json.cards(cards) do |card|
    json.partial!("api/cards/card", :card => card)
  end
end